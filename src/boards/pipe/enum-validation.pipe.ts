import { BadRequestException, ParseEnumPipe } from '@nestjs/common';

export class EnumValidationPipe extends ParseEnumPipe<any> {
  constructor(enumType: any) {
    super(enumType);
  }

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isEnum(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }

    return value;
  }
}
