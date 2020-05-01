# J. Nathan Farmer, Marko Milosavlijevic, Bright Phakamad, Matt Soria
#
# Step 1: Run this file to download the dataset to your local machine in the correct folder that will be ignored by Git

import kaggle
import os

if __name__ == '__main__':
    # Set working dir to location of this file
    abs_path = os.path.abspath(__file__)
    dir_name = os.path.dirname(abs_path)
    os.chdir(dir_name)

    # Create data folder and change working dir to there
    dir_name = dir_name + '\\data\\'
    os.mkdir('data')
    os.chdir('data')

    # Kaggle API to download files
    kaggle.api.authenticate()
    kaggle.api.dataset_download_files('noriuk/us-education-datasets-unification-project', path=dir_name, unzip=True)