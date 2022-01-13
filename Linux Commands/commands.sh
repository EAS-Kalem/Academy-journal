mkdir linux_commands
cd linux_commands
ls > first_file
mkdir backup_first_file
cp first_file backup_of_first_file
mv backup_of_first_file ./backup_first_file
mkdir modified_file
cp first_file updated_file
mv updated_file ./modified_file
cd modified_file
ls >> updated_file
chmod 0700 updated_file
