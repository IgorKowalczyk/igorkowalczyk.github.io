counter=1

for file in $(ls -t); do
    if [ "$file" = "$script_filename" ]; then
        continue
    fi

    if [ -f "$file" ]; then
        extension="${file##*.}"
        new_name="${counter}.${extension}"
        mv "$file" "$new_name"
        ((counter++))
    fi
done

echo "Images have been successfully renamed from newest to oldest!"