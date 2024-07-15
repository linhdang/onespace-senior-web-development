$(document).ready(function() {
    'use strict';
    // Fetch JSON data when the document is ready
    $.getJSON('data/plans.json')
        .done(function(data) {
            const $table = $('#plan');
            const $tbody = $('<tbody></tbody>');

            data.forEach(function(item) {
                const $row = $('<tr></tr>');

                const $idCell = $('<th scope="row"></th>').text(item.id);
                const $goalCell = $('<td></td>').text(item.goal);
                const $dateCell = $('<td></td>').text(item.date);

                $row.append($idCell);
                $row.append($goalCell);
                $row.append($dateCell);

                $tbody.append($row);
            });

            $table.append($tbody);
        })
         .fail(function() {
                    console.error('Error fetching data');
                });
        });