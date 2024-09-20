import SemanticTokens from "./SemanticTokens";

const { border, surface, text } = SemanticTokens;

const ComponentTokens = {
  formControl: {
    border: {
      width: border.width.default,
      widthHover: border.width.emphasis,
      color: border.color.regular,
      colorSelected: border.color.dark,
    },
    background: {
      default: surface.primary,
      hover: surface.subtle,
      selected: surface.secondary,
    },
  },
  button: {
    universal: {
      borderRadius: border.radius.subtle,
    },
    primary: {
      background: surface.secondary,
      backgroundHover: surface.secondaryInteractive,
      backgroundActive: surface.secondarySoft,
      labelColor: text.color.buttonInverted,
    },
    secondary: {
      background: surface.primary,
      backgroundActive: surface.primaryInteractive,
      borderWidth: border.width.emphasis,
      borderColor: border.color.dark,
      borderColorInteractive: border.color.accent,
      labelColor: text.color.button,
      labelColorInteractive: text.color.buttonAccent,
    },
    tertiary: {
      background: surface.subtle,
      backgroundActive: surface.subtleInteractive,
      borderWidthInteractive: border.width.emphasis,
      borderColorInteractive: border.color.regular,
      labelColor: text.color.button,
    },
  },
};

export default ComponentTokens;
