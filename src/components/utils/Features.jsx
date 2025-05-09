import Card from "./Card";

function Features() {
  return (
    <section id='features' className='pt-12 bg-gray-50 dark:bg-dark-blue-1'>
      {/* Features Container */}
      <div className='container mx-auto px-6 pb-32'>
        {/* First Row */}
        <div className='flex flex-col space-y-24 text-center md:flex-row md:space-y-0'>
          <Card
            imageUrl='portfolio-frontend/assets/images/software-engineering-icon.svg'
            title='Building and Maintenance Backend Systems'
            description="From years (15 years), I've worked on several types of systems 
            (Marketing Automation, Ecommerce, Warehouse Management, etc), using the most
            useful and well performed frameworks (Django), Engines (NodeJS) and languages 
            (Python, C++ and Javascript) known at the market."
          />
          <Card
            imageUrl='portfolio-frontend/assets/images/database-icon.svg'
            title='Deal with Databases'
            description="It's higlly mandatory to have experience on database when it comes software at the market.
            Furthermore, I love to analyse and manipulate data with relationship tables and create efficient queries. 
            Because of that, SQL and Postgres are mine main focus on it."
          />
        </div>

        {/* Second Row */}
        <div className='flex flex-col space-y-24 mt-28 text-center md:flex-row md:space-y-0'>
          <Card
            imageUrl='portfolio-frontend/assets/images/data-processing-icon.svg'
            title='Manipulating Unstructure data'
            description='Several times I was tasked with understanding and solve the problem for each client, analysing 
            unstructured and structured data in order to organize and clean them. To achieve that, I used powerful
            libraries for loading, extract and clean the data from different types of files (csv, pdf, docx) using
            Pandas and Numpy, and sources as well (ftp, restapis, local files, scrapping and more).
            '
          />
          <Card
            imageUrl='portfolio-frontend/assets/images/frontend-source-code-icon.svg'
            title='Experience with Frontend Development Insights'
            description='Web system is mandatory for companies show your product to your clients. For backend developers 
            is crucial to have some knowledge in frontend, specially Javascript (Vannila and/or Typescript) and frameworks 
            (special libraries) like React or Angular now a days '
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
