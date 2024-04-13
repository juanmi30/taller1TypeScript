export class Serie {
  constructor(
    public id: number,
    public nombre: string,
    public canal: string,
    public temporadas: number,
    public descripcion: string,
    public webOficial: string,
    public urlImagen: string
  ) {}
}
