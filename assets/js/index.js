const init = () => {
    axios.get('http://localhost/LeyberProject/php-employee-manager-1/resources/employees.json').then(({ data }) => {

        $("#jsGrid").jsGrid({
            width: "100%",
            height: "400px",

            onItemInserting: function (args) {
                axios({
                    method: 'POST',
                    url: 'http://localhost/LeyberProject/php-employee-manager-1/src/library/employeeController.php',
                    data: args.item
                });
            },

            onItemDeleting: function (args) {
                axios({
                    method: 'DELETE',
                    url: 'http://localhost/LeyberProject/php-employee-manager-1/src/library/employeeController.php',
                    data: args.item.id
                });
            },

            onItemUpdating: function (args) {
                axios({
                    method: 'PATCH',
                    url: 'http://localhost/LeyberProject/php-employee-manager-1/src/library/employeeController.php',
                    data: args.item
                });
            },

            inserting: true,
            editing: true,
            sorting: true,
            paging: true,

            data,

            fields: [
                { name: "id", type: "text", width: 150, validate: "required", readOnly: false },
                { name: "name", type: "text", width: 150, validate: "required" },
                { name: "email", type: "text", width: 150, validate: "required" },
                { name: "age", type: "number", width: 50, validate: "required" },
                { name: "streetAddress", type: "text", width: 50, validate: "required" },
                { name: "city", type: "text", width: 50, validate: "required" },
                { name: "state", type: "text", width: 50, validate: "required" },
                { name: "postalCode", type: "text", width: 50, validate: "required" },
                { name: "phoneNumber", type: "text", width: 50, validate: "required" },
                { type: "control" }
            ]
        });
    });
};

$(init);