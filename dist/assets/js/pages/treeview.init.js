$(function () {
    var e = [{
        text: "Parent 1",
        href: "#parent1",
        tags: ["4"],
        nodes: [{
            text: "Child 1",
            href: "#child1",
            tags: ["2"],
            nodes: [{
                text: "Grandchild 1",
                href: "#grandchild1",
                tags: ["0"]
            }, {
                text: "Grandchild 2",
                href: "#grandchild2",
                tags: ["0"]
            }]
        }, {
            text: "Child 2",
            href: "#child2",
            tags: ["0"]
        }]
    }, {
        text: "Parent 2",
        href: "#parent2",
        tags: ["0"]
    }, {
        text: "Parent 3",
        href: "#parent3",
        tags: ["0"]
    }, {
        text: "Parent 4",
        href: "#parent4",
        tags: ["0"]
    }, {
        text: "Parent 5",
        href: "#parent5",
        tags: ["0"]
    }];
    $("#treeview1").treeview({
        selectedBackColor: colors.primary,
        onhoverColor: "rgba(0, 0, 0, 0.05)",
        expandIcon: "bx bx-plus mr-2",
        collapseIcon: "bx bx-minus mr-2",
        nodeIcon: "bx bx-folder fs-xs mr-2",
        data: e
    }), $("#treeview2").treeview({
        levels: 1,
        selectedBackColor: colors.primary,
        onhoverColor: "rgba(0, 0, 0, 0.05)",
        expandIcon: "bx bx-plus mr-2",
        collapseIcon: "bx bx-minus mr-2",
        nodeIcon: "bx bx-folder fs-xs mr-2",
        data: e
    }), $("#treeview3").treeview({
        levels: 99,
        selectedBackColor: colors.primary,
        onhoverColor: "rgba(0, 0, 0, 0.05)",
        expandIcon: "bx bx-plus mr-2",
        collapseIcon: "bx bx-minus mr-2",
        nodeIcon: "bx bx-folder fs-xs mr-2",
        data: e
    }), $("#treeview4").treeview({
        expandIcon: "bx bx-chevron-right fs-xs mr-2",
        onhoverColor: "rgba(0, 0, 0, 0.05)",
        selectedBackColor: colors.primary,
        collapseIcon: "bx bx-chevron-down fs-xs mr-2",
        nodeIcon: "bx bx-bookmark fs-xs mr-2",
        data: e
    });
    var o = $("#treeview-searchable").treeview({
            selectedBackColor: colors.primary,
            onhoverColor: "rgba(0, 0, 0, 0.05)",
            expandIcon: "bx bx-plus mr-2",
            collapseIcon: "bx bx-minus mr-2",
            nodeIcon: "bx bx-folder fs-xs mr-2",
            data: e
        }),
        n = function (e) {
            var n = $("#input-search").val(),
                t = {
                    ignoreCase: $("#chk-ignore-case").is(":checked"),
                    exactMatch: $("#chk-exact-match").is(":checked"),
                    revealResults: $("#chk-reveal-results").is(":checked")
                },
                c = o.treeview("search", [n, t]),
                l = "<p>" + c.length + " matches found</p>";
            $.each(c, function (e, n) {
                l += "<p>- " + n.text + "</p>"
            }), $("#search-output").html(l)
        };
    $("#btn-search").on("click", n), $("#input-search").on("keyup", n), $("#btn-clear-search").on("click", function (e) {
        o.treeview("clearSearch"), $("#input-search").val(""), $("#search-output").html(""), $(".custom-control-input").prop("checked", !1)
    });
    var t = function () {
            return $("#treeview-selectable").treeview({
                data: e,
                multiSelect: $("#chk-select-multi").is(":checked"),
                onNodeSelected: function (e, n) {
                    $("#selectable-output").prepend("<p>" + n.text + " was selected</p>")
                },
                onNodeUnselected: function (e, n) {
                    $("#selectable-output").prepend("<p>" + n.text + " was unselected</p>")
                }
            })
        },
        c = t(),
        l = function () {
            return c.treeview("search", [$("#input-select-node").val(), {
                ignoreCase: !1,
                exactMatch: !1
            }])
        },
        i = l();
    $("#chk-select-multi:checkbox").on("change", function () {
        console.log("multi-select change"), c = t(), i = l()
    }), $("#input-select-node").on("keyup", function (e) {
        i = l(), $(".select-node").prop("disabled", !(1 <= i.length))
    }), $("#btn-select-node.select-node").on("click", function (e) {
        c.treeview("selectNode", [i, {
            silent: $("#chk-select-silent").is(":checked")
        }])
    }), $("#btn-unselect-node.select-node").on("click", function (e) {
        c.treeview("unselectNode", [i, {
            silent: $("#chk-select-silent").is(":checked")
        }])
    }), $("#btn-toggle-selected.select-node").on("click", function (e) {
        c.treeview("toggleNodeSelected", [i, {
            silent: $("#chk-select-silent").is(":checked")
        }])
    });
    var d = $("#treeview-expandible").treeview({
            data: e,
            onNodeCollapsed: function (e, n) {
                $("#expandible-output").prepend("<p>" + n.text + " was collapsed</p>")
            },
            onNodeExpanded: function (e, n) {
                $("#expandible-output").prepend("<p>" + n.text + " was expanded</p>")
            }
        }),
        a = function () {
            return d.treeview("search", [$("#input-expand-node").val(), {
                ignoreCase: !1,
                exactMatch: !1
            }])
        },
        s = a();
    $("#input-expand-node").on("keyup", function (e) {
        s = a(), $(".expand-node").prop("disabled", !(1 <= s.length))
    }), $("#btn-expand-node.expand-node").on("click", function (e) {
        var n = $("#select-expand-node-levels").val();
        d.treeview("expandNode", [s, {
            levels: n,
            silent: $("#chk-expand-silent").is(":checked")
        }])
    }), $("#btn-collapse-node.expand-node").on("click", function (e) {
        d.treeview("collapseNode", [s, {
            silent: $("#chk-expand-silent").is(":checked")
        }])
    }), $("#btn-toggle-expanded.expand-node").on("click", function (e) {
        d.treeview("toggleNodeExpanded", [s, {
            silent: $("#chk-expand-silent").is(":checked")
        }])
    }), $("#btn-expand-all").on("click", function (e) {
        var n = $("#select-expand-all-levels").val();
        d.treeview("expandAll", {
            levels: n,
            silent: $("#chk-expand-silent").is(":checked")
        })
    }), $("#btn-collapse-all").on("click", function (e) {
        d.treeview("collapseAll", {
            silent: $("#chk-expand-silent").is(":checked")
        })
    });
    var r = $("#treeview-checkable").treeview({
            data: e,
            showIcon: !1,
            showCheckbox: !0,
            onNodeChecked: function (e, n) {
                $("#checkable-output").prepend("<p>" + n.text + " was checked</p>")
            },
            onNodeUnchecked: function (e, n) {
                $("#checkable-output").prepend("<p>" + n.text + " was unchecked</p>")
            }
        }),
        p = function () {
            return r.treeview("search", [$("#input-check-node").val(), {
                ignoreCase: !1,
                exactMatch: !1
            }])
        },
        h = p();
    $("#input-check-node").on("keyup", function (e) {
        h = p(), $(".check-node").prop("disabled", !(1 <= h.length))
    }), $("#btn-check-node.check-node").on("click", function (e) {
        r.treeview("checkNode", [h, {
            silent: $("#chk-check-silent").is(":checked")
        }])
    }), $("#btn-uncheck-node.check-node").on("click", function (e) {
        r.treeview("uncheckNode", [h, {
            silent: $("#chk-check-silent").is(":checked")
        }])
    }), $("#btn-toggle-checked.check-node").on("click", function (e) {
        r.treeview("toggleNodeChecked", [h, {
            silent: $("#chk-check-silent").is(":checked")
        }])
    }), $("#btn-check-all").on("click", function (e) {
        r.treeview("checkAll", {
            silent: $("#chk-check-silent").is(":checked")
        })
    }), $("#btn-uncheck-all").on("click", function (e) {
        r.treeview("uncheckAll", {
            silent: $("#chk-check-silent").is(":checked")
        })
    });
    var u = $("#treeview-disabled").treeview({
            data: e,
            onNodeDisabled: function (e, n) {
                $("#disabled-output").prepend("<p>" + n.text + " was disabled</p>")
            },
            onNodeEnabled: function (e, n) {
                $("#disabled-output").prepend("<p>" + n.text + " was enabled</p>")
            },
            onNodeCollapsed: function (e, n) {
                $("#disabled-output").prepend("<p>" + n.text + " was collapsed</p>")
            },
            onNodeUnchecked: function (e, n) {
                $("#disabled-output").prepend("<p>" + n.text + " was unchecked</p>")
            },
            onNodeUnselected: function (e, n) {
                $("#disabled-output").prepend("<p>" + n.text + " was unselected</p>")
            }
        }),
        k = function () {
            return u.treeview("search", [$("#input-disable-node").val(), {
                ignoreCase: !1,
                exactMatch: !1
            }])
        },
        x = k();
    $("#input-disable-node").on("keyup", function (e) {
        x = k(), $(".disable-node").prop("disabled", !(1 <= x.length))
    }), $("#btn-disable-node.disable-node").on("click", function (e) {
        u.treeview("disableNode", [x, {
            silent: $("#chk-disable-silent").is(":checked")
        }])
    }), $("#btn-enable-node.disable-node").on("click", function (e) {
        u.treeview("enableNode", [x, {
            silent: $("#chk-disable-silent").is(":checked")
        }])
    }), $("#btn-toggle-disabled.disable-node").on("click", function (e) {
        u.treeview("toggleNodeDisabled", [x, {
            silent: $("#chk-disable-silent").is(":checked")
        }])
    }), $("#btn-disable-all").on("click", function (e) {
        u.treeview("disableAll", {
            silent: $("#chk-disable-silent").is(":checked")
        })
    }), $("#btn-enable-all").on("click", function (e) {
        u.treeview("enableAll", {
            silent: $("#chk-disable-silent").is(":checked")
        })
    });
    $("#treeview12").treeview({
        data: '[{"text": "Parent 1","nodes": [{"text": "Child 1","nodes": [{"text": "Grandchild 1"},{"text": "Grandchild 2"}]},{"text": "Child 2"}]},{"text": "Parent 2"},{"text": "Parent 3"},{"text": "Parent 4"},{"text": "Parent 5"}]'
    })
});