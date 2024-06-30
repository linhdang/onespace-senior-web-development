(function() {
      'use strict';
      window.addEventListener('load', function() {
        const data = [
                { id: 1, goal: 'Learn Web Development on Node.js', date: '06/10/2024' },
                { id: 2, goal: 'Win CodeQuest 2024', date: '06/04/2024' },
                { id: 3, goal: 'Win CodeQuest 2025', date: '06/04/2025' },
                { id: 4, goal: 'Win CodeQuest 2026', date: '06/04/2026' },
                { id: 5, goal: 'Win CodeQuest 2027', date: '06/04/2027' },
                { id: 6, goal: 'Win CodeQuest 2028', date: '06/04/2028' },
                { id: 7, goal: 'Win CodeQuest 2029', date: '06/04/2029' }
            ];

        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
                document.getElementById('output').textContent = JSON.stringify(data);
            })
            .catch(error => console.error('Error:', error));
        const table = document.getElementById('plan');

        const tbody = document.createElement('tbody');

        data.forEach(item => {
            const row = document.createElement('tr');

            const idCell = document.createElement('th');
            idCell.scope = 'row';
            idCell.textContent = item.id;
            row.appendChild(idCell);

            const goalCell = document.createElement('td');
            goalCell.textContent = item.goal;
            row.appendChild(goalCell);

            const dateCell = document.createElement('td');
            dateCell.textContent = item.date;
            row.appendChild(dateCell);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
      }, false);
})();

// use this one for backend
//(function() {
//      'use strict';
//      window.addEventListener('load', function() {
//        fetch('data/plans.json')
//                  .then(response => response.json())
//                  .then(data => {
//                      const table = document.getElementById('plan');
//
//                      const tbody = document.createElement('tbody');
//
//                      data.forEach(item => {
//                          const row = document.createElement('tr');
//
//                          const idCell = document.createElement('th');
//                          idCell.scope = 'row';
//                          idCell.textContent = item.id;
//                          row.appendChild(idCell);
//
//                          const goalCell = document.createElement('td');
//                          goalCell.textContent = item.goal;
//                          row.appendChild(goalCell);
//
//                          const dateCell = document.createElement('td');
//                          dateCell.textContent = item.date;
//                          row.appendChild(dateCell);
//
//                          tbody.appendChild(row);
//                      });
//
//                      table.appendChild(tbody);
//                  })
//                  .catch(error => console.error('Error:', error));
//
//      }, false);
//})();