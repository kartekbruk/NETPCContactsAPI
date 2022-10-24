using System.ComponentModel.DataAnnotations;

namespace NETPCContactsAPI.Models
{
    public class Subcategory
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Subcategory name is required")]
        [StringLength(20)]
        public string Type { get; set; } = string.Empty;
    }
}
