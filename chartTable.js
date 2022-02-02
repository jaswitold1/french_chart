const chartLabelRender = () => {
  let loader = `LOADING`;
  document.querySelector(".placeholder").innerText = loader;

  fetch("https://randomuser.me/api/?results=1000&gender=male&nat=fr")
    .then((resp) => resp.json())
    .then((resp) => {
      ////CHART

      document.querySelector(".placeholder").innerHTML = `
            <div class='chart'>
            <canvas id="myChart" width="400" height="300"></canvas>
            </div>
            <div class='table'></div>`;

      const ctx = document.getElementById("myChart").getContext("2d");
      const labels = [
        "0-9",
        "10-19",
        "20-29",
        "30-39",
        "40-49",
        "50-59",
        "60-69",
        "70-79",
        "80-89",
        "90-99",
      ];

      let dataSetFinal = [];
      labels.forEach((el, i) => {
        dataSetFinal.push(
          resp.results
            .map((el) => {
              return el.dob.age;
            })
            .filter((el) => {
              return el >= i * 10 && el <= i * 10 + 9;
            }).length
        );
      });

      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "users age",
              data: dataSetFinal,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "red",
                "blue",
                "green",
                "magenta",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "red",
                "blue",
                "green",
                "magenta",
              ],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      ////TABLE

      document.querySelector(
        ".table"
      ).innerHTML = `<table><thead><tr><th colspan="3">10 oldest men data</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <th colspan="1">age</th>
            <th colspan="1">first name</th>
            <th colspan="1">last name</th>
            </tr>
            
              ${resp.results
                .sort((a, b) => {
                  return b.dob.age - a.dob.age;
                })
                .slice(0, 10)
                .map((el, i) => {
                  return `<tr>
                    <td>${el.dob.age}</td>
                    <td>${el.name.first}</td>
                    <td>${el.name.last}</td>
                </tr>`;
                })}
            </tbody>
          </table>
        `;
    });
};

chartLabelRender();
