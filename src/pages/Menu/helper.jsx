import { FaFilter } from "react-icons/fa";

export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "black", // background color
    color: "white", // text color
    border: "1px solid black", // border color
    borderRadius: "0.75rem", // border radius
    width: "10rem",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "gray" : "black",
    color: "white",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "white",
  }),
};

export const options = [
  {
    value: "default",
    label: (
      <>
        <FaFilter className="icon" />
      </>
    ),
  },
  { value: "A-Z", label: "A-Z" },
  { value: "Z-A", label: "Z-A" },
  { value: "low-to-high", label: "Low to High" },
  { value: "high-to-low", label: "High to Low" },
];


