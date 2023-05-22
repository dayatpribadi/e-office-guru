! function (a) {
    a("#view_project_list").DataTable({
        language: {
            paginate: {
                previous: "<i class='bx bx-chevron-left'>",
                next: "<i class='bx bx-chevron-right'>"
            }
        },
        order: [],
        columnDefs: [{
            targets: [0, 6],
            orderable: !1
        }],
        drawCallback: function () {
            a(".dataTables_paginate > .pagination").addClass("flat-rounded-pagination "), a(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative"), a(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        }
    })
}(jQuery);

! function (a) {
    a("#view_log_list").DataTable({
        language: {
            paginate: {
                previous: "<i class='bx bx-chevron-left'>",
                next: "<i class='bx bx-chevron-right'>"
            }
        },
        order: [],
        columnDefs: [{
            targets: [0, 6],
            orderable: !1
        }],
        drawCallback: function () {
            a(".dataTables_paginate > .pagination").addClass("flat-rounded-pagination "), a(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative"), a(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        }
    })
}(jQuery);