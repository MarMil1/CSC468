# J. Nathan Farmer, Marko Milosavlijevic, Bright Phakamad, Matt Soria
#
# This is the backend for the Flask web server

import pandas as pd

if __name__ == '__main__':
    # Read in the csv file
    data_in_file = 'data/states_all_extended.csv'
    data = pd.read_csv(data_in_file)