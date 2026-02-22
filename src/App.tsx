import { useState } from "react";
import styled, { keyframes } from "styled-components";
import ProfileCard from "./components/ProfileCard";
import ProfileImage from "./assets/125342019.jfif";
import { PageWrapper } from "./components/Styled";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Layout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 48px;
  padding: 48px 24px;
  flex-wrap: wrap;
  width: 100%;
`;

const CardSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease both;
`;

const Panel = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  padding: 28px 24px;
  width: 280px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  animation: ${fadeIn} 0.5s 0.1s ease both;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PanelTitle = styled.h3`
  font-family: "Georgia", serif;
  font-size: 1rem;
  font-weight: 700;
  color: #111;
  margin: 0 0 4px;
  letter-spacing: -0.2px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  margin: 0;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: #888;
  font-family: sans-serif;
`;

const TextInput = styled.input`
  padding: 9px 12px;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  font-size: 0.875rem;
  font-family: "Georgia", serif;
  color: #222;
  background: #fafafa;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
    background: #fff;
  }

  &::placeholder {
    color: #bbb;
  }
`;

const ColorRow = styled.div`
  display: flex;
  gap: 12px;
`;

const ColorField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
`;

const ColorInput = styled.input`
  width: 100%;
  height: 38px;
  border: 1.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  padding: 2px 4px;
  cursor: pointer;
  background: #fafafa;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #aaa;
  }
`;

const RangeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RangeInput = styled.input`
  flex: 1;
  height: 4px;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 2px;
  background: linear-gradient(
    to right,
    #555 0%,
    #555 var(--val, 20%),
    #ddd var(--val, 20%),
    #ddd 100%
  );
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #222;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.15s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }
`;

const RangeValue = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: #555;
  font-family: monospace;
  min-width: 26px;
  text-align: right;
`;

const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ToggleLabel = styled.span`
  font-size: 0.875rem;
  color: #333;
  font-family: sans-serif;
`;

const Toggle = styled.button<{ active: boolean }>`
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 12px;
  border: none;
  background: ${({ active }) => (active ? "#222" : "#ddd")};
  cursor: pointer;
  transition: background 0.25s ease;
  flex-shrink: 0;

  &::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: white;
    top: 3px;
    left: ${({ active }) => (active ? "23px" : "3px")};
    transition: left 0.25s ease;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ShapeButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const ShapeBtn = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 8px 0;
  border-radius: 9px;
  border: 1.5px solid ${({ active }) => (active ? "#222" : "rgba(0,0,0,0.1)")};
  background: ${({ active }) => (active ? "#222" : "#fafafa")};
  color: ${({ active }) => (active ? "#fff" : "#555")};
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: sans-serif;

  &:hover {
    border-color: #555;
    background: ${({ active }) => (active ? "#222" : "#f0f0f0")};
  }
`;

function App() {
  const [name, setName] = useState("John Doe");
  const [role, setRole] = useState("Frontend Dev");
  const [bg, setBg] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#111111");
  const [radius, setRadius] = useState(16);
  const [shadow, setShadow] = useState(true);
  const [shape, setShape] = useState("circle");

  const rangePercent = (radius / 50) * 100;

  return (
    <PageWrapper>
      <Layout>
        <CardSection>
          <ProfileCard
            name={name}
            role={role}
            bg={bg}
            textColor={textColor}
            radius={radius}
            shadow={shadow}
            shape={shape}
            image={ProfileImage}
          />
        </CardSection>

        <Panel>
          <PanelTitle>Customize Card</PanelTitle>
          <Divider />

          <FieldGroup>
            <Field>
              <Label>Name</Label>
              <TextInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </Field>

            <Field>
              <Label>Role</Label>
              <TextInput
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Your role"
              />
            </Field>
          </FieldGroup>

          <Divider />

          <Field>
            <Label>Colors</Label>
            <ColorRow>
              <ColorField>
                <Label>Background</Label>
                <ColorInput
                  type="color"
                  value={bg}
                  onChange={(e) => setBg(e.target.value)}
                />
              </ColorField>
              <ColorField>
                <Label>Text</Label>
                <ColorInput
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                />
              </ColorField>
            </ColorRow>
          </Field>

          <Divider />

          <Field>
            <Label>Corner Radius</Label>
            <RangeWrapper>
              <RangeInput
                type="range"
                min="0"
                max="50"
                value={radius}
                style={{ "--val": `${rangePercent}%` } as React.CSSProperties}
                onChange={(e) => setRadius(Number(e.target.value))}
              />
              <RangeValue>{radius}px</RangeValue>
            </RangeWrapper>
          </Field>

          <Divider />

          <ToggleRow>
            <ToggleLabel>Drop Shadow</ToggleLabel>
            <Toggle active={shadow} onClick={() => setShadow(!shadow)} />
          </ToggleRow>

          <Divider />

          <Field>
            <Label>Avatar Shape</Label>
            <ShapeButtons>
              <ShapeBtn
                active={shape === "circle"}
                onClick={() => setShape("circle")}
              >
                Circle
              </ShapeBtn>
              <ShapeBtn
                active={shape === "square"}
                onClick={() => setShape("square")}
              >
                Square
              </ShapeBtn>
            </ShapeButtons>
          </Field>
        </Panel>
      </Layout>
    </PageWrapper>
  );
}

export default App;
