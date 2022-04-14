for file in projects shared style
do
    # Move the file to a name matching its hash.
    echo mv css/$file*.css css/$file-`minihash css/$file*.css`.css
    mv css/$file*.css css/$file-`minihash css/$file*.css`.css  

    # Grab the new filename and replace all occurrences in HTML files.
    filePath=`ls css/$file-*.css`
    newFile="$(basename $filePath)"
    echo $filePath $newFile
    sed -i '.bak' -e "s/$file-[^.]*\.css/$newFile/g" *.html
done
cd ..
