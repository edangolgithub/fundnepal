using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Amazon.DynamoDBv2.DataModel;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace NgoService
{
    public class Country
    {
        [DynamoDBHashKey]
        public int CountryId { get; set; }
        public string iso3166CountryCode { get; set; }
        public string name { get; set; }
    }

    // public class Countries
    // {
    //     public Country country { get; set; }
    //     public string iso3166CountryCode { get; set; }
    //     public string name { get; set; }
    // }

    public class DonationOption
    {
        [DynamoDBHashKey]
        public int DonationOptionId { get; set; }
        public string amount { get; set; }
        public string description { get; set; }
    }

    public class Imagelink
    {
        [DynamoDBHashKey]
        public int ImagelinkId { get; set; }
        public string Size { get; set; }
        public string url { get; set; }
    }

    public class Image
    {
        [DynamoDBHashKey]
        public int ImageId { get; set; }
        public string Id { get; set; }
        public List<Imagelink> imagelink { get; set; }
        public string title { get; set; }
    }

    public class Theme
    {
        [DynamoDBHashKey]
        public int ThemeId { get; set; }
        public string id { get; set; }
        public string name { get; set; }
    }

    public class Organization
    {
        [DynamoDBHashKey]
        public int OrganaizationId { get; set; }
        public string activeProjects { get; set; }
        public string addressLine1 { get; set; }
        public string city { get; set; }
        public string country { get; set; }
        public string id { get; set; }
        public string iso3166CountryCode { get; set; }
        public string mission { get; set; }
        public string name { get; set; }
        public string postal { get; set; }
        public string totalProjects { get; set; }
        public string url { get; set; }
        public List<Theme> themes { get; set; }
        public List<Country> countries { get; set; }
    }

    public class Video
    {
        [DynamoDBHashKey]
        public int VideoId { get; set; }
        public string url { get; set; }
    }

    // public class Videos
    // {
    //     public Video video { get; set; }
    // }

    public class Project
    {
        [DynamoDBHashKey]
        public string ProjectId { get; set; }
        public string active { get; set; }
        public string activities { get; set; }
        public string additionalDocumentation { get; set; }
        public string approvedDate { get; set; }
        public string contactAddress { get; set; }
        public string contactAddress2 { get; set; }
        public string contactCity { get; set; }
        public string contactCountry { get; set; }
        public string contactName { get; set; }
        public string contactPostal { get; set; }
        public string contactState { get; set; }
        public string contactTitle { get; set; }
        public string contactUrl { get; set; }
        public string country { get; set; }
        public IEnumerable<Country> countries { get; set; }
        public string dateOfMostRecentReport { get; set; }
        public List<DonationOption> donationOptions { get; set; }
        public string funding { get; set; }
        public string goal { get; set; }
        public string id { get; set; }
        public string imageGallerySize { get; set; }
        public string imageLink { get; set; }
        public int imageid { get; set; }
        public string iso3166CountryCode { get; set; }
        public string longTermImpact { get; set; }
        public string modifiedDate { get; set; }
        public string need { get; set; }
        public string notice { get; set; }
        public string numberOfDonations { get; set; }
        public string numberOfReports { get; set; }
        public int organizationId { get; set; }
        public string progressReportLink { get; set; }
        public string projectLink { get; set; }
        public string region { get; set; }
        public string remaining { get; set; }
        public string status { get; set; }
        public string summary { get; set; }
        public string themeName { get; set; }
        public List<Theme> themes { get; set; }
        public string title { get; set; }
        public string type { get; set; }
        public IEnumerable<Video> videos { get; set; }
    }

}