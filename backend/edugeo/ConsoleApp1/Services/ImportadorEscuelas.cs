using GoogleSniffer.Entities;
using OfficeOpenXml;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoogleSniffer
{
    public class ImportadorEscuelas
    {
        
        const int JURISDICCION = 1;
        const int SECTOR = 2;
        const int AMBITO = 3;
        const int DEPARTAMENTO = 4;
        const int NOMBRE = 10;
        const int DOMICILIO = 11;
        const int EMAIL = 15;
        const int EDCOMUN = 16;
        const int EDESPECIAL = 17;
        const int EDJOVENESADULTOS = 18;
        const int EDARTISTICA = 19;

        public ImportadorEscuelas()
        {
            OfficeOpenXml.ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

            FileInfo existingFile = new FileInfo("exeloide.xlsx");
            using (ExcelPackage package = new ExcelPackage(existingFile))
            {
                //get the first worksheet in the workbook
                ExcelWorksheet worksheet = package.Workbook.Worksheets[0];
                int colCount = worksheet.Dimension.End.Column;  //get Column Count
                int rowCount = 63331; // worksheet.Dimension.End.Row;     //get row count

                Console.WriteLine($"El Excel tiene {rowCount} filas y {colCount} columnas");
                using (EdugeoModel db = new EdugeoModel())
                {
                    var escuelas = db.Escuelas.Select(i => i.Nombre).ToList();

                    for (int row = 1; row <= rowCount; row++)
                    {

                        var provincia = worksheet.Cells[row, JURISDICCION].Value.ToString();
                        var nombre = worksheet.Cells[row, NOMBRE].Value.ToString();

                        if (provincia == "Ciudad de Buenos Aires" && escuelas.Contains(nombre) == false)
                        {
                            Escuela escuela = new Escuela();
                            escuela.Provincia = provincia;
                            escuela.Nombre = nombre;
                            escuela.EsPublico = worksheet.Cells[row, SECTOR].Value.ToString() == "Estatal";
                            escuela.EsUrbano = worksheet.Cells[row, AMBITO].Value?.ToString() == "Urbano";
                            escuela.Departamento = worksheet.Cells[row, DEPARTAMENTO].Value.ToString();
                            escuela.Domicilio = worksheet.Cells[row, DOMICILIO].Value.ToString();
                            escuela.Email = worksheet.Cells[row, EMAIL].Value?.ToString();
                            escuela.EdComun = worksheet.Cells[row, EDCOMUN].Value?.ToString() == "1";
                            escuela.EdEspecial = worksheet.Cells[row, EDESPECIAL].Value?.ToString() == "1";
                            escuela.EdJovenesAdultos = worksheet.Cells[row, EDJOVENESADULTOS].Value?.ToString() == "1";
                            escuela.EdArtistica = worksheet.Cells[row, EDARTISTICA].Value?.ToString() == "1";
                            db.Escuelas.Add(escuela);
                           
                            Console.WriteLine("Agregado " + escuela.Nombre);
                        }
                    }
                    db.SaveChanges();
                    Console.WriteLine("hay "+ db.Escuelas.Count() +" escuelas");
                }

            }
        }
    }
}
