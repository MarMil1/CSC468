# J. Nathan Farmer, Marko Milosavlijevic, Bright Phakamad, Matt Soria
#
# Step 4: Run this file to see how we explored the data

import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sb
import geopandas as gpd
import os, zipfile, requests

if __name__ == '__main__':
    # Set working dir to location of this file
    abs_path = os.path.abspath(__file__)
    dir_name = os.path.dirname(abs_path)
    os.chdir(dir_name)

    # Read in the csv file
    data_in_file = 'data/states_all_extended.csv'
    ext_data = pd.read_csv(data_in_file, index_col=0)

    data_in_file = 'data/states_all.csv'
    data = pd.read_csv(data_in_file, index_col=0)

    # What size are the different datasets?
    print('Original dataset shape:', data.shape)
    print('Extended dataset shape:', ext_data.shape)

    # Original dataset structure in dataframe
    print('\nOriginal dataset preview:')
    print(data.head())

    # Extended dataset structure in dataframe
    print('\nExtended dataset preview:')
    print(ext_data.head())

    # Original dataset columns
    print('\nOriginal dataset columns:')
    print(data.columns)

    ############################################################################################
    #
    # CHECK FOR MISSING VALUES
    #
    ############################################################################################

    # Missing values in ext_data
    print('\nMissing values per column:')
    nulls = ext_data.isnull().sum().to_frame()
    for index, row in nulls.iterrows():
        print('{:30}{}'.format(index, row[0]))

    # All but 30 of the columns are missing MOST of the data
    # How many observations have data for EVERY column?
    print('\nNumber of observations without any missing data:', len(ext_data.dropna().index))

    ############################################################################################
    #
    # NORMALIZE BY NUMBER OF STUDENTS
    #
    ############################################################################################

    data['EXPENDITURE_PER_STUDENT'] = data['TOTAL_EXPENDITURE'] / data['GRADES_ALL_G']

    ############################################################################################
    #
    # CORRELATION ANALYSIS
    #
    ############################################################################################

    print('\nTotal number of features:', len(ext_data.columns))

    # Before we can decide which columns or observations to drop, lets see how they correlate
    ext_data_corr = ext_data.corr(method='pearson', min_periods=20)
    # Output complete correlation matrix to csv file
    ext_data_corr.to_csv('data/ext_data_corr_all.csv')
    
    # We will drop features with poor correlations accross the board
    # Find the absolute value of each correlation
    ext_data_corr_abs = ext_data_corr.abs()
    # Select upper triangle of correlation matrix
    upper = ext_data_corr_abs.where(np.triu(np.ones(ext_data_corr_abs.shape), k=1).astype(np.bool))
    # Find features with all correlations between -0.3 and 0.3
    to_drop = [column for column in upper.columns if not any(upper[column] > 0.3)]
    # Drop uncorrelated features and run correlation analysis again
    ext_data_weak = ext_data.drop(to_drop, axis=1)
    ext_data_corr_weak = ext_data_weak.corr(method='pearson', min_periods=20)
    print('Number of features with at least 1 correlation > 0.3:', len(ext_data_weak.columns))
    # Output weak correlation matrix to csv file
    ext_data_corr_weak.to_csv('data/ext_data_corr_weak.csv')

    # We will drop features with less than moderate correlations accross the board
    # Find features with all correlations between -0.6 and 0.6
    to_drop = [column for column in upper.columns if not any(upper[column] > 0.6)]
    # Drop uncorrelated features and run correlation analysis again
    ext_data_moderate = ext_data.drop(to_drop, axis=1)
    ext_data_corr_moderate = ext_data_moderate.corr(method='pearson', min_periods=20)
    print('Number of features with at least 1 correlation > 0.6:', len(ext_data_moderate.columns))
    # Output weak correlation matrix to csv file
    ext_data_corr_moderate.to_csv('data/ext_data_corr_moderate.csv')

    # We will drop features with less than moderate correlations accross the board
    # Find features with all correlations between -0.9 and 0.9
    to_drop = [column for column in upper.columns if not any(upper[column] > 0.9)]
    # Drop uncorrelated features and run correlation analysis again
    ext_data_strong = ext_data.drop(to_drop, axis=1)
    ext_data_corr_strong = ext_data_strong.corr(method='pearson', min_periods=20)
    print('Number of features with at least 1 correlation > 0.9:', len(ext_data_strong.columns))
    # Output weak correlation matrix to csv file
    ext_data_corr_strong.to_csv('data/ext_data_corr_strong.csv')

    ############################################################################################
    #
    # EXPLORATORY VISUALIZATION
    #
    ############################################################################################

    # Choropleth
    # Create directory for shapefile
    path = 'data/shapefiles'
    os.makedirs(path, mode=0o777, exist_ok=True)
    # Download and unzip shapefile
    zip_url = 'https://www2.census.gov/geo/tiger/GENZ2018/shp/cb_2018_us_state_500k.zip'
    r = requests.get(zip_url)
    with open(path + '/cb_2018_us_state_500k.zip', 'wb') as f:
        f.write(r.content)
    with zipfile.ZipFile(path + '/cb_2018_us_state_500k.zip', 'r') as zip_ref:
        zip_ref.extractall(path)
    # Read shapefile
    usa = gpd.read_file('data/shapefiles/cb_2018_us_state_500k.shp')
    # Join the geodataframe with the csv dataframe
    usa['NAME'] = usa['NAME'].str.upper()
    choropleth_data = usa.merge(data, how='left', left_on='NAME', right_on='STATE')
    choropleth_data_2016 = choropleth_data.copy()
    choropleth_data_2016 = choropleth_data_2016[choropleth_data_2016['YEAR']==2016].reset_index()
    choropleth_data_2016 = choropleth_data_2016[['STATE','EXPENDITURE_PER_STUDENT', 'geometry']]
    print(choropleth_data_2016[choropleth_data_2016['STATE']=='NORTH CAROLINA'])

    # Set the value column that will be visualised
    variable = 'EXPENDITURE_PER_STUDENT'
    # Set the range for the choropleth values
    vmin, vmax = 0, choropleth_data_2016['EXPENDITURE_PER_STUDENT'].max()
    # Create figure and axes for Matplotlib
    fig, ax = plt.subplots(1, figsize=(30, 10))
    # Zoom into the contiguous US
    plt.xlim(-128, -65)
    plt.ylim(23, 50)
    # Remove the axis
    #ax.axis('off')
    # Add a title and annotation
    ax.set_title('2016 Education Expenditure per Student', fontdict={'fontsize': '15', 'fontweight' : '3'})
    # Create colorbar legend
    sm = plt.cm.ScalarMappable(cmap='Blues', norm=plt.Normalize(vmin=vmin, vmax=vmax))
    # Empty array for the data range
    sm.set_array([])
    # Add the colorbar to the figure
    clb = plt.colorbar(sm)
    clb.set_label('$ per Student', labelpad=20, rotation=270)
    # Create map
    choropleth_data_2016.plot(column=variable, cmap='Blues', linewidth=0.8, ax=ax, edgecolor='0.8')
    plt.show()