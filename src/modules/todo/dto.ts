export class CreateDto {
  title: string
  isCompleted?: boolean
}

export class UpdateDto {
  id: number
  isCompleted: boolean
}