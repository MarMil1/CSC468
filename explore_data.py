# J. Nathan Farmer, Marko Milosavlijevic, Bright Phakamad, Matt Soria
#
# Step 4: Run this file to download the dataset to your local machine in the correct folder that will be ignored by Git

import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sb

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

    # Missing values in ext_data
    print('\nMissing values per column:')
    nulls = ext_data.isnull().sum().to_frame()
    for index, row in nulls.iterrows():
        print('{:30}{}'.format(index, row[0]))

    # All but 30 of the columns are missing MOST of the data
    # How many observations have data for EVERY column?
    print('\nNumber of observations without missing data:', len(ext_data.dropna().index))

    # Before we can decide which columns or observations to drop, lets see how they correlate
