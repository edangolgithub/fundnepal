using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fundnepalnew
{
    public class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Profile { get; set; }
        public DateTime CreatedTimestamp { get; set; }
        public string Token { get; set; }
        public string Access { get; set; }
    }
    public class Inventory
    {
        //  ID# , Type, Price, Store where purchase, Purchase date, 
        // Quantity on purchase, Used Date, quantity after use

        public string Id { get; set; }        
        public string EntryDate { get; set; }
        public string Type { get; set; }
        public double Price { get; set; }
        public string PurchasedStore { get; set; }
        public string PurchasedDate { get; set; }
        public int QuantityPurchased { get; set; }
        public string UsedDate { get; set; }
        public int QuantityRemaining { get; set; }
        public string Site { get; set; }
         public string SiteCategory { get; set; }
        public string Serial { get; set; }
        public string Model { get; set; }
        public string PartNum { get; set; }
        public string SoldDate { get; set; }
        public string DisposedDate { get; set; }
        public int State { get; set; }
        public int Quantity { get; set; }
        public string User { get; set; }

    }

}