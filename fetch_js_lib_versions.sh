#!/usr/bin/env sh

for pkg in Chart.js jquery moment.js semantic-ui pleasejs; do
    curl -sS https://api.cdnjs.com/libraries/${pkg}?fields=name,filename,version | jq .
done
