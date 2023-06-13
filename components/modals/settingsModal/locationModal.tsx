/** @jsxImportSource @emotion/react */
import SettingsTextField from '@/components/inputs/SettingsInput'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from 'styles/components/button';
import { theme } from 'styles/theme';

const LocationModal = () => {
  const [location, setLocation] = useState(
    "",
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value } = e.target;
    setLocation(value);
  };
  const handleNext = () => {};
  return (
    <div css = {{width: "100%", padding: "1rem"}}>
      <p css = {{fontSize: "24px", fontWeight: "bold"}}>Location</p>
      <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginTop: "2rem"
          }}
        >
          <SettingsTextField
            label={"Search City"}
            name="Location"
            value={location}
            placeholder={"Lagos,Lagos,Nigeria"}
            setValue={handleChange}
          />
          <div
            css={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2.2rem",
            }}
          >
            <Button onClick={handleNext} height = "52px">
              <p
                css={{
                  fontSize: "16px",
                  fontFamily: '"Nunito", sans-serif',
                  paddingInline: "7rem",
                }}
              >
                SAVE CHANGES
              </p>
            </Button>
          </div>
        </div>
    </div>
  )
}

export default LocationModal


