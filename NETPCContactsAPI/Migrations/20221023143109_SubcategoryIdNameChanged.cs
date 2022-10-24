using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NETPCContactsAPI.Migrations
{
    public partial class SubcategoryIdNameChanged : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contacts_Subcategories_SubcategoryID",
                table: "Contacts");

            migrationBuilder.RenameColumn(
                name: "SubcategoryID",
                table: "Contacts",
                newName: "SubcategoryId");

            migrationBuilder.RenameIndex(
                name: "IX_Contacts_SubcategoryID",
                table: "Contacts",
                newName: "IX_Contacts_SubcategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Contacts_Subcategories_SubcategoryId",
                table: "Contacts",
                column: "SubcategoryId",
                principalTable: "Subcategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contacts_Subcategories_SubcategoryId",
                table: "Contacts");

            migrationBuilder.RenameColumn(
                name: "SubcategoryId",
                table: "Contacts",
                newName: "SubcategoryID");

            migrationBuilder.RenameIndex(
                name: "IX_Contacts_SubcategoryId",
                table: "Contacts",
                newName: "IX_Contacts_SubcategoryID");

            migrationBuilder.AddForeignKey(
                name: "FK_Contacts_Subcategories_SubcategoryID",
                table: "Contacts",
                column: "SubcategoryID",
                principalTable: "Subcategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
