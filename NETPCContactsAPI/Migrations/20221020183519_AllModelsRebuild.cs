using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NETPCContactsAPI.Migrations
{
    public partial class AllModelsRebuild : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Subcategories_SubcategoryID",
                table: "Categories");

            migrationBuilder.DropIndex(
                name: "IX_Categories_SubcategoryID",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "SubcategoryID",
                table: "Categories");

            migrationBuilder.AddColumn<int>(
                name: "SubcategoryID",
                table: "Contacts",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Contacts_SubcategoryID",
                table: "Contacts",
                column: "SubcategoryID");

            migrationBuilder.AddForeignKey(
                name: "FK_Contacts_Subcategories_SubcategoryID",
                table: "Contacts",
                column: "SubcategoryID",
                principalTable: "Subcategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contacts_Subcategories_SubcategoryID",
                table: "Contacts");

            migrationBuilder.DropIndex(
                name: "IX_Contacts_SubcategoryID",
                table: "Contacts");

            migrationBuilder.DropColumn(
                name: "SubcategoryID",
                table: "Contacts");

            migrationBuilder.AddColumn<int>(
                name: "SubcategoryID",
                table: "Categories",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Categories_SubcategoryID",
                table: "Categories",
                column: "SubcategoryID");

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_Subcategories_SubcategoryID",
                table: "Categories",
                column: "SubcategoryID",
                principalTable: "Subcategories",
                principalColumn: "Id");
        }
    }
}
