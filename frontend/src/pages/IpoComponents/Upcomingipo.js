import {
    Heading,
    Text,
    BreadcrumbLink,
    Breadcrumb,
    BreadcrumbItem,
  } from "../../components";
  import CompanyProfile from "../../components/CompanyProfile"; // Corrected import statement
  import React, { Suspense } from "react";
  
  const companyIpoDetailsGrid = [
    {
      companyName: "Nova Agritech Ltd.",
      priceBandLabel: "PRICE BAND",
      openPrice: "OPEN",
      closePrice: "CLOSE",
      priceRange: "Rs 39 - 41",
      startDate: "2024-01-22",
      endDate: "2024-01-24",
      issueSizeLabel: "ISSUE SIZE",
      issueTypeLabel: "ISSUE TYPE",
      listingDateLabel: "LISTING DATE",
      issueSizeValue: "143.81 Cr.",
      issueTypeValue: "Book Built",
      listingDateValue: "2024-01-30",
      rhpButton: "RHP",
      drhpButton: "DRHP",
    },
    {
        companyName: "Nova Agritech Ltd.",
        priceBandLabel: "PRICE BAND",
        openPrice: "OPEN",
        closePrice: "CLOSE",
        priceRange: "Rs 39 - 41",
        startDate: "2024-01-22",
        endDate: "2024-01-24",
        issueSizeLabel: "ISSUE SIZE",
        issueTypeLabel: "ISSUE TYPE",
        listingDateLabel: "LISTING DATE",
        issueSizeValue: "143.81 Cr.",
        issueTypeValue: "Book Built",
        listingDateValue: "2024-01-30",
        rhpButton: "RHP",
        drhpButton: "DRHP",
      },
      {
        companyName: "Nova Agritech Ltd.",
        priceBandLabel: "PRICE BAND",
        openPrice: "OPEN",
        closePrice: "CLOSE",
        priceRange: "Rs 39 - 41",
        startDate: "2024-01-22",
        endDate: "2024-01-24",
        issueSizeLabel: "ISSUE SIZE",
        issueTypeLabel: "ISSUE TYPE",
        listingDateLabel: "LISTING DATE",
        issueSizeValue: "143.81 Cr.",
        issueTypeValue: "Book Built",
        listingDateValue: "2024-01-30",
        rhpButton: "RHP",
        drhpButton: "DRHP",
      },
      {
        companyName: "Nova Agritech Ltd.",
        priceBandLabel: "PRICE BAND",
        openPrice: "OPEN",
        closePrice: "CLOSE",
        priceRange: "Rs 39 - 41",
        startDate: "2024-01-22",
        endDate: "2024-01-24",
        issueSizeLabel: "ISSUE SIZE",
        issueTypeLabel: "ISSUE TYPE",
        listingDateLabel: "LISTING DATE",
        issueSizeValue: "143.81 Cr.",
        issueTypeValue: "Book Built",
        listingDateValue: "2024-01-30",
        rhpButton: "RHP",
        drhpButton: "DRHP",
      },
      {
        companyName: "Nova Agritech Ltd.",
        priceBandLabel: "PRICE BAND",
        openPrice: "OPEN",
        closePrice: "CLOSE",
        priceRange: "Rs 39 - 41",
        startDate: "2024-01-22",
        endDate: "2024-01-24",
        issueSizeLabel: "ISSUE SIZE",
        issueTypeLabel: "ISSUE TYPE",
        listingDateLabel: "LISTING DATE",
        issueSizeValue: "143.81 Cr.",
        issueTypeValue: "Book Built",
        listingDateValue: "2024-01-30",
        rhpButton: "RHP",
        drhpButton: "DRHP",
      },
      {
        companyName: "Nova Agritech Ltd.",
        priceBandLabel: "PRICE BAND",
        openPrice: "OPEN",
        closePrice: "CLOSE",
        priceRange: "Rs 39 - 41",
        startDate: "2024-01-22",
        endDate: "2024-01-24",
        issueSizeLabel: "ISSUE SIZE",
        issueTypeLabel: "ISSUE TYPE",
        listingDateLabel: "LISTING DATE",
        issueSizeValue: "143.81 Cr.",
        issueTypeValue: "Book Built",
        listingDateValue: "2024-01-30",
        rhpButton: "RHP",
        drhpButton: "DRHP",
      },
      {
        companyName: "Nova Agritech Ltd.",
        priceBandLabel: "PRICE BAND",
        openPrice: "OPEN",
        closePrice: "CLOSE",
        priceRange: "Rs 39 - 41",
        startDate: "2024-01-22",
        endDate: "2024-01-24",
        issueSizeLabel: "ISSUE SIZE",
        issueTypeLabel: "ISSUE TYPE",
        listingDateLabel: "LISTING DATE",
        issueSizeValue: "143.81 Cr.",
        issueTypeValue: "Book Built",
        listingDateValue: "2024-01-30",
        rhpButton: "RHP",
        drhpButton: "DRHP",
      }
    // Duplicate and incomplete objects were removed for clarity
    // Add other IPO details here if needed
  ];
  
  export default function UpcomingIPOSummarySection() {
    return (
      <div className="flex flex-col items-center">
        {/* Upcoming IPO Summary Section */}
        <div className="container-xs flex flex-col gap-[30px] lg:px-5 md:px-5">
          <div className="flex flex-col items-start">
            <Breadcrumb
              separator={
                <Text className="h-[18px] w-[6.19px] text-[12px] font-normal text-colors">
                  
                </Text>
              }
              className="flex flex-wrap gap-1 self-stretch"
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  <Text as="p" className="text-indigo-a700">
                    Bluestock
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  <Text as="p" className="text-indigo-a700">
                    IPO
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">
                  <Text as="p" className="text-black-900">
                    UPCOMING IPO
                  </Text>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading
              size="heading2x1"
              as="h1"
              className="mt-3 lg:text-[27px] md:text-[26px] sm:text-[24px]"
            >
              Upcoming IPO
            </Heading>
            <Heading as="h2" className="font-light">
              Companies that have filed for an IPO with SEBI. Few details might be
              disclosed by the companies later.
            </Heading>
          </div>
          <div>
            <div className="grid grid-cols-3 justify-center gap-[84px] gap-y-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {companyIpoDetailsGrid.map((d, index) => (
                  <CompanyProfile {...d} key={"featuresGrid" + index} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    );
  }
  