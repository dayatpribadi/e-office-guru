! function (a) {
    a("#view_contact_list").DataTable({
        language: {
            paginate: {
                previous: "<i class='bx bx-chevron-left'>",
                next: "<i class='bx bx-chevron-right'>"
            }
        },
        ordering: !1,
        info: !0,
        lengthChange: !1,
        drawCallback: function () {
            a(".dataTables_paginate > .pagination").addClass("flat-rounded-pagination justify-content-end"), a(".dataTables_paginate > .pagination .page-link").addClass("waves-effect waves-light"), a(".dataTables_filter").find("label").addClass("search-box d-inline-flex position-relative"), a(".dataTables_filter").find(".form-control").attr("placeholder", "Search...")
        }
    })
}(jQuery);