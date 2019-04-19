import tinycolor from 'tinycolor2';

interface ICheckIsReadable {
  fontSize: string;
  hex: string;
}

export default function checkIsReadable({
  fontSize,
  hex,
}: ICheckIsReadable): boolean {
  return tinycolor.isReadable(hex, '#fff', {
    level: 'AA',
    size: fontSize === '14' ? 'small' : 'large',
  });
}
