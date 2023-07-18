export const DEFAULT_COL_DEF = {
  flex: 1,
  resizable: false,
  sortable: true,
  filter: true,
  cellDataType: false,
};

export const phaFormatter = (params: any) => {
  return params.data.pha === "Y" ? "Yes" : "No";
};

export const dateFormatter = (params: any) => {
  const dateStr = params.data.discovery_date;
  return dateStr ? new Date(dateStr).toLocaleString() : "N/A";
};
