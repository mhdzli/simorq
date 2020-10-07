#! /bin/bash

# Exit on any error
set -e

set +e

echo "Installing bundler..."
gem install bundler
bundle install

echo "Building the website."
bundler exec jekyll build
