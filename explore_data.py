# J. Nathan Farmer, Marko Milosavlijevic, Bright Phakamad, Matt Soria
#
# Step 4: Run this file to download the dataset to your local machine in the correct folder that will be ignored by Git

import pandas as pd

if __name__ == '__main__':
    # Read in the csv file
    data_in_file = 'data/states_all_extended.csv'
    data = pd.read_csv(data_in_file)

    print(data.head())