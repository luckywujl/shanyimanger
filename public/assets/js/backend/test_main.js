define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'test_main/index' + location.search,
                    add_url: 'test_main/add',
                    edit_url: 'test_main/edit',
                    del_url: 'test_main/del',
                    multi_url: 'test_main/multi',
                    table: 'test_main',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'test_ID',
                sortName: 'test_ID',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'test_ID', title: __('Test_id')},
                        {field: 'test_code', title: __('Test_code')},
                        {field: 'test_name', title: __('Test_name')},
                        {field: 'test_status', title: __('Test_status'), searchList: {"0":__('Test_status 0'),"1":__('Test_status 1')}, formatter: Table.api.formatter.status},
                        {field: 'company_id', title: __('Company_id')},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});