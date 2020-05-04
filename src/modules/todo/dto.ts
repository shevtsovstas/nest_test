export class CreateDto {
  title: string
  isCompleted?: boolean
}

export class UpdateDto {
  id: string
  title: string
  isCompleted: boolean
}