using Microsoft.EntityFrameworkCore.Migrations;

namespace GoogleSniffer.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GeoMarkers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Latitud = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Longitud = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DireccionFormateada = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GeoMarkers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Escuelas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GeoMarkerId = table.Column<int>(type: "int", nullable: true),
                    EsPublico = table.Column<bool>(type: "bit", nullable: false),
                    EsUrbano = table.Column<bool>(type: "bit", nullable: false),
                    Provincia = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Departamento = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Domicilio = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EdComun = table.Column<bool>(type: "bit", nullable: false),
                    EdEspecial = table.Column<bool>(type: "bit", nullable: false),
                    EdJovenesAdultos = table.Column<bool>(type: "bit", nullable: false),
                    EdArtistica = table.Column<bool>(type: "bit", nullable: false),
                    Inicial = table.Column<bool>(type: "bit", nullable: false),
                    Primaria = table.Column<bool>(type: "bit", nullable: false),
                    Secundaria = table.Column<bool>(type: "bit", nullable: false),
                    Tecnica = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Escuelas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Escuelas_GeoMarkers_GeoMarkerId",
                        column: x => x.GeoMarkerId,
                        principalTable: "GeoMarkers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Escuelas_GeoMarkerId",
                table: "Escuelas",
                column: "GeoMarkerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Escuelas");

            migrationBuilder.DropTable(
                name: "GeoMarkers");
        }
    }
}
