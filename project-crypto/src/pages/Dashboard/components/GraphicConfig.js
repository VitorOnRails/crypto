export const graphicConfig = {
  chart: {
    sparkline: { enabled: false },
    toolbar: { show: false },
    animations: { enabled: true, easing: "linear", speed: 800 },

    defaultLocale: "pt-br",
    locales: [{
      name: "pt-br",
      options: {
        months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
        shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
        shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      },
    }],
  },
  stroke: { curve: "smooth", width: 3 },
   fill: {
    type: "gradient",
     gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  tooltip: {
   theme: "dark",
    x: { show: true },
  },
  dataLabels: { enabled: false },
  xaxis: {
    type: "datetime",
    labels: {
      show: true,
      style: {
        colors: "#A0AEC0",
        fontSize: "1rem",
      },
      datetimeUTC: false,
      datetimeFormatter: {
        year: "yyyy",
        month: "MMM 'yy",
        day: "ddd",
        hour: "HH:mm",
      }
    },
    tickAmount: 8,
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  grid: {
  show: true,
  borderColor: "rgba(255, 255, 255, 0.05)",
},
  yaxis: {
  show: true,
   labels: {
    style: {
      colors: "#A0AEC0",
      fontSize: "1rem",
    },
   },
 },
}; 