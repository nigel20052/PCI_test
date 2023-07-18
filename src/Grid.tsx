import { useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const phaFormatter = (params: any) => {
  return params.data.pha === "Y" ? "Yes" : "No";
};

const dateFormatter = (params: any) => {
  const dateStr = params.data.discovery_date;
  return dateStr ? new Date(dateStr).toLocaleString() : "N/A";
};

const columnDefs: ColDef[] = [
  {
    field: "designation",
    headerName: "Designation",
    filterParams: { defaultOption: "contains" },
  },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    valueFormatter: dateFormatter,
  },
  { field: "h_mag", headerName: "H (mag)" },
  { field: "moid_au", headerName: "MOID (au)" },
  { field: "q_au_1", headerName: "q (au)" },
  { field: "q_au_2", headerName: "Q (au)" },
  { field: "period_yr", headerName: "Period (yr)" },
  { field: "i_deg", headerName: "Inclination (deg)" },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    valueFormatter: phaFormatter,
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    enableRowGroup: true,
    filterParams: { defaultOption: "contains" },
  },
];

const defaultColDef = {
  flex: 1,
  resizable: false,
  sortable: true,
  filter: true,
  cellDataType: false,
};

const NeoGrid = (): JSX.Element => {
  const gridRef = useRef<AgGridReact>(null);

  const reset = () => {
    if(gridRef.current){
      gridRef.current.api.setFilterModel(null);
    }
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>Near-Earth Object Overview</h2>
        <button onClick={reset} style={{ marginLeft: "15px" }}>
          Clear Filters and Sorters
        </button>
      </div>
      <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
        <AgGridReact
          ref={gridRef}
          rowData={data}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          enableRangeSelection={true}
          suppressMultiRangeSelection={true}
          rowGroupPanelShow={"always"}
        />
      </div>
    </>
  );
};

export default NeoGrid;
