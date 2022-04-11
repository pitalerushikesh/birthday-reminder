// ----------------------------------------------------------------------

export default function Chip() {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "3px",
        },
        colorSuccess: {
          backgroundColor: "#d4e6a5",
          color: "#476a2e",
        },
        colorPrimary: {
          backgroundColor: "#b2e5ed",
          color: "#00abc5",
        },
        colorWarning: {
          backgroundColor: "#ffefdb",
          color: "#f29423",
        },
        colorDanger: {
          backgroundColor: "#ffefdb",
          color: "#f29423",
        },
      },
    },
  };
}
