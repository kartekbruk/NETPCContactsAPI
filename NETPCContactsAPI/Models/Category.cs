using System.ComponentModel.DataAnnotations;

namespace NETPCContactsAPI.Models
{
    public class Category
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Category name is required")]
        [StringLength(20)]
        public string Type { get; set; } = string.Empty;
    }
}
