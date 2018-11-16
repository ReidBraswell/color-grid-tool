import tinycolor from 'tinycolor2';

interface CheckIsReadable {
  fontSize: string;
  hex: string;
}

export default function checkIsReadable({
  fontSize,
  hex
}: CheckIsReadable): boolean {
  return tinycolor.isReadable(hex, '#fff', {
    level: 'AA',
    size: fontSize === '14' ? 'small' : 'large'
  });
}
