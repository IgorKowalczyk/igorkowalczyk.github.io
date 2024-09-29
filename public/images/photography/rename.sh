counter=1

for file in *; do
    if [ -f "$file" ]; then
        extension="${file##*.}"
        if [ "$extension" = "sh" ]; then
            continue
        fi

        while [ -e "${counter}.${extension}" ]; do
            counter=$((counter + 1))
        done

        new_name="${counter}.${extension}"
        mv "$file" "$new_name"
        counter=$((counter + 1))
    fi
done

echo "Images have been successfully renamed!"