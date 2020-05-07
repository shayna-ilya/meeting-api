export class AddMessageDTO {
  readonly email: string;
  readonly message: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly created_at: Date;
}
