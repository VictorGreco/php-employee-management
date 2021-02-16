const basePath = 'http://localhost:8000';

const init = () => {
    axios.get(`${basePath}/resources/employees.json`).then(({ data }) => {

        $("#jsGrid").jsGrid({
            width: "90%",
            height: "60vh",
            inserting: true,
            editing: true,
            sorting: true,
            paging: true,
            data,
            fields: [
                { name: "id", type: "text", width: 20, validate: "required", readOnly: false },
                { name: "name", type: "text", width: 80, validate: "required" },
                { name: "email", type: "text", width: 150, validate: "required" },
                { name: "age", type: "number", width: 35, validate: "required" },
                { name: "streetAddress", type: "text", width: 100, validate: "required" },
                { name: "city", type: "text", width: 80, validate: "required" },
                { name: "state", type: "text", width: 40, validate: "required" },
                { name: "postalCode", type: "text", width: 80, validate: "required" },
                { name: "phoneNumber", type: "text", width: 110, validate: "required" },
                { type: "control" }
            ],

            onItemInserting: function ({ item, grid }) {
                const { data } = grid;
                const { id } = item;
                let isDuplicatedId = false;

                data.forEach(row => {
                    if (row?.id == id) { isDuplicatedId = true }
                });

                if (!isDuplicatedId) {
                    axios({
                        method: 'POST',
                        url: `${basePath}/src/library/employeeController.php`,
                        data: item
                    });
                }
            },

            onItemDeleting: function ({ item }) {
                const { id } = item;

                axios({
                    method: 'DELETE',
                    url: `${basePath}/src/library/employeeController.php`,
                    data: id
                });
            },

            onItemUpdating: function ({ item }) {
                axios({
                    method: 'PATCH',
                    url: `${basePath}/src/library/employeeController.php`,
                    data: item
                });
            },

            rowClick: function (args) { },
            rowDoubleClick: function ({ item }) { window.location.href = `${basePath}/src/employee.php?userId=${item.id}` }
        });
    });
};

$(init);