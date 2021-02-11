const init = () => {
    axios.get('http://localhost:8000/resources/employees.json').then(({ data }) => {

        $("#jsGrid").jsGrid({
            width: "100%",
            height: "400px",

            onItemInserting: function(args) {
                console.log(args);

                axios.post('http://localhost:8000/src/library/employeeManager.php', {
                    ...args.item
                });
            },  // before controller.insertItem
    
            inserting: true,
            editing: true,
            sorting: true,
            paging: true,
    
            data,
    
            fields: [
                { name: "id", type: "text", width: 150, validate: "required", readOnly: false},
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