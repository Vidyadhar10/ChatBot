$.ajax({
    url: 'http://192.168.43.155:5000/show_database',
    type: 'GET',
    dataType: "json",
    success: function (data) {
        $.each(data, function (index, item) {
            $('#KnowledgeBaseTable').append($('<tr>')
                .append($('<td>').attr('class', 'd-none').text(item.id))
                .append($('<td>').text(item.department))
                .append($('<td>').text(item.section))
                .append($('<td>').text(item.problem))
                .append($('<td>').text(item.tag))
                .append($('<td>').html(item.answer))
                .append($('<td>').append($('<a>').attr('href', item.link).attr('target', 'blank').text(item.link))));
        });
    }
});

function InsertintoDatabase() {
    var ckValue = CKEDITOR.instances["myeditor"].getData();
    $.ajax({
        url: 'http://192.168.43.155:5000/insert_database/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            "department": $('#departmentname').val(),
            "section": $('#sectionname').val(),
            "tag": $('#tag').val(),
            "problem": $('#problem').val(),
            "answer": ckValue,
            "link": $('#solutionlink').val()
        }),
        success: function (data) {

            $.ajax({
                url: 'http://192.168.43.155:5000/show_database',
                type: 'GET',
                dataType: "json",
                success: function (data) {
                    $.each(data, function (index, item) {
                        $('#KnowledgeBaseTable').append($('<tr>')
                            .append($('<td>').text(item.department))
                            .append($('<td>').text(item.section))
                            .append($('<td>').append($('<a>').attr('href', '#').attr('onclick', 'PullToForm(' + item.id + ')').text(item.problem)))
                            .append($('<td>').text(item.tag))
                            .append($('<td>').text(item.answer))
                            .append($('<td>').append($('<a>').attr('href', item.link).attr('target', 'blank').text(item.link))));
                    });
                }
            });

        }
    });
}


function UpdateData() {
    var id = localStorage.getItem('UpdateValueID');
    var ckValue = CKEDITOR.instances["myeditor"].getData();

    $.ajax({
        url: 'http://192.168.43.155:5000/update_database/' + id,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            "department": $('#departmentname').val(),
            "section": $('#sectionname').val(),
            "tag": $('#tag').val(),
            "problem": $('#problem').val(),
            "answer": ckValue,
            "link": $('#solutionlink').val()
        }),
        complete: function () {

            $.ajax({
                url: 'http://192.168.43.155:5000/show_database',
                type: 'GET',
                dataType: "json",
                success: function (data) {
                    $.each(data, function (index, item) {
                        $('#KnowledgeBaseTable').append($('<tr>')
                            .append($('<td>').text(item.department))
                            .append($('<td>').text(item.section))
                            .append($('<td>').append($('<a>').attr('href', '#').attr('onclick', 'PullToForm(' + item.id + ')').text(item.problem)))
                            .append($('<td>').text(item.tag))
                            .append($('<td>').text(item.answer))
                            .append($('<td>').append($('<a>').attr('href', item.link).attr('target', 'blank').text(item.link))));
                    });
                    $('#KBForm').trigger('reset');

                }
            });
        },
        success: function (data) {
            localStorage.removeItem('UpdateValueID');
        }
    });


}

function PullToForm(id) {
    $('#PublishBtn').addClass('d-none');
    $('#UpdateBtn').removeClass('d-none');
    localStorage.setItem('UpdateValueID', id);
    $.ajax({
        url: 'http://192.168.43.155:5000/pull_database/' + id,
        type: 'GET',
        dataType: "json",
        success: function (data) {
            $.each(data, function (index, item) {
                $('#departmentname').val(item.department);
                $('#sectionname').val(item.section);
                $('#problem').val(item.problem);
                $('#tag').val(item.tag);
                CKEDITOR.instances["myeditor"].setData(item.answer);
                $('#solutionlink').val(item.link);
            });

        }
    });
}

