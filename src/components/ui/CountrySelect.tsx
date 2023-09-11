import React, { useContext, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { ReferenceContext } from "../../store/context/ReferenceContext";

type Props = {
  name?: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CountrySelect({
  name,
  value,
  onChange,
  className
}: Props) {
  const { countries } = useContext(ReferenceContext);
  const selectedCountry = countries.find((country) => country.name === value);
  const [select, setSelect] = useState(selectedCountry?.code || "");
  const CountryCodes = countries.map((codes) => codes.code);

  const onSelect = (code: string) => {
    setSelect(code);
    const selectedCountry = countries.find((country) => country.code === code);
    onChange({
      target: { name, value: selectedCountry?.name }
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <ReactFlagsSelect
      className={className}
      selected={select}
      onSelect={onSelect}
      placeholder={"Select a country"}
      searchable
      searchPlaceholder={"Search Your Country"}
      countries={CountryCodes}
      showSelectedLabel
      /*
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
    />
  );
}
