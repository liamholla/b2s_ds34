// asuasdiuashdkashdiuashd

// var viz = new tableau.Viz(placeholderDiv, url, options);
let viz;
let workbook;

// 1. Create a variable to store the placeholderDiv
const placeholderDiv = document.getElementById("vizContainer");
// 2. Create a variable to store the URL
const url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia?:language=en-GB&:display_count=n&:origin=viz_share_link";
// Create a variable to store the dashboard options
const options = {
  device: "desktop",
  height: "800px",
  width: "1100px",
};

function initViz() {
  console.log("Viz is ready to load");
  viz = new tableau.Viz(placeholderDiv, url, options);
}

// Listen for the content to be loaded, when finished, load the viz
document.addEventListener("DOMContentLoaded", initViz);

// Buttons
// Where are my buttons?
const exportpdfbutton = document.getElementById("ExportPDF");
const exportPPTbutton = document.getElementById("ExportPPT");

// What happens when buttons are clicked
function exportPDFfunction() {
  viz.showExportPDFDialog();
}
function exportPPTfunction() {
  viz.showExportPowerPointDialog();
}

// Listen for buttons clicked
exportpdfbutton.addEventListener("click", exportPDFfunction);
exportPPTbutton.addEventListener("click", exportPPTfunction);

// ---------------------------------------

const filterButton = document.getElementById("FilterButton");
filterButton.addEventListener("click", getRangeValues);

function getRangeValues() {
  // Filter range buttons

  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);

  // need to get the active sheet and then list of worksheets
  //   const workbook = viz.getWorkbook();
  //   const activeSheet = workbook.getActiveSheet();
  //   const sheets = activeSheet.getWorksheets();

  //   console.log(sheets);

  //   const sheetToFilter = sheets[0];
}
