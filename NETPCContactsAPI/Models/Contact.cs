using System.ComponentModel.DataAnnotations;

namespace NETPCContactsAPI.Models
{
    public class Contact
    {
        public int Id { get; set; }
        [StringLength(20)]
        public string FirstName { get; set; } = string.Empty;
        [StringLength(40)]
        public string LastName { get; set; } = string.Empty;
        [Required(ErrorMessage = "Email address is required")]
        [StringLength(40)]
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public int CategoryId { get; set; }
        public Category? Category { get; set; }
        public int SubcategoryId { get; set; }
        public Subcategory? Subcategory { get; set; }
        [StringLength(15)]
        public string PhoneNumber { get; set; } = string.Empty;
        [Range(1, 31)]
        public int BirthDay { get; set; }
        [Range(1, 12)]
        public int BirthMonth { get; set; }
        [Range(1900, 2022)]
        public int BirthYear { get; set; }

    }
}
