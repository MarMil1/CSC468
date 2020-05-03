# J. Nathan Farmer, Marko Milosavlijevic, Bright Phakamad, Matt Soria
#
# Step 4: Run this file to download the dataset to your local machine in the correct folder that will be ignored by Git

import pandas as pd
import numpy as np
#import matplotlib.pyplot as plt
#import seaborn as sb

if __name__ == '__main__':
    # Read in the csv file
    data_in_file = 'data/states_all_extended.csv'
    ext_data = pd.read_csv(data_in_file)

    data_in_file = 'data/states_all.csv'
    data = pd.read_csv(data_in_file)

    # What size are the different datasets?
    print('Original dataset shape:', data.shape)
    print('Extended dataset shape:', ext_data.shape)

    # Extended dataset has the same observations, just with more attributes associated
    # We will use the extended dataset and systematically remove fields we don't need

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
    print('\nNumber of observations without missing data:', len(ext_data.dropna().index))

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