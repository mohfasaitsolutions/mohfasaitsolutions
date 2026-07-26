import { PrismaClient, Industry, CompanySize, Budget, ExpectedStart, PreferredContact, ReferralSource, LeadStatus, Priority } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clean existing data
  await prisma.consultationActivity.deleteMany();
  await prisma.consultationFile.deleteMany();
  await prisma.consultationRequest.deleteMany();

  // Create Sample Lead 1
  const lead1 = await prisma.consultationRequest.create({
    data: {
      fullName: 'Sarah Jenkins',
      companyName: 'Apex Innovations Inc.',
      email: 'sarah.j@apexinnovations.com',
      phone: '+1 (555) 019-2834',
      country: 'United States',
      industry: Industry.TECHNOLOGY,
      companySize: CompanySize.MEDIUM,
      services: JSON.stringify(['Custom Business Software', 'AI & Business Automation']),
      projectTitle: 'Enterprise Resource Management & Autonomous AI Agents',
      projectDescription: 'We are seeking an enterprise ERP platform integrated with RAG-based AI customer support agents to automate our supply chain dispatch.',
      budget: Budget.BETWEEN_10000_25000,
      expectedStart: ExpectedStart.IMMEDIATELY,
      preferredContact: PreferredContact.EMAIL,
      referralSource: ReferralSource.LINKEDIN,
      meetingRequired: true,
      ndaRequired: true,
      status: LeadStatus.NEW,
      priority: Priority.HIGH,
      notes: 'Initial contact via web consultation form. High urgency project.',
      activities: {
        create: [
          { activity: 'Lead Created', createdBy: 'SYSTEM' },
          { activity: 'NDA Sent to Client', createdBy: 'SYSTEM' },
        ],
      },
      files: {
        create: [
          {
            fileName: 'Apex_ERP_Requirements_v1.pdf',
            fileUrl: 'https://storage.mohfasa.com/files/Apex_ERP_Requirements_v1.pdf',
            mimeType: 'application/pdf',
          },
        ],
      },
    },
  });

  // Create Sample Lead 2
  const lead2 = await prisma.consultationRequest.create({
    data: {
      fullName: 'Dr. Marcus Vance',
      companyName: 'Vanguard Medical Systems',
      email: 'm.vance@vanguardhealth.org',
      phone: '+1 (555) 892-1049',
      country: 'Canada',
      industry: Industry.HEALTHCARE,
      companySize: CompanySize.ENTERPRISE,
      services: JSON.stringify(['Website & Web Application Development', 'Cloud & DevOps Solutions']),
      projectTitle: 'HIPAA-Compliant Patient Portal & EHR Cloud Infrastructure',
      projectDescription: 'Modernization of legacy clinic portal handling 50,000+ patient records with sub-second page performance.',
      budget: Budget.ABOVE_25000,
      expectedStart: ExpectedStart.TWO_WEEKS,
      preferredContact: PreferredContact.PHONE,
      referralSource: ReferralSource.REFERRAL,
      meetingRequired: true,
      ndaRequired: true,
      status: LeadStatus.MEETING_SCHEDULED,
      priority: Priority.HIGH,
      notes: 'Technical discovery meeting scheduled for Tuesday 10 AM EST.',
      activities: {
        create: [
          { activity: 'Lead Created', createdBy: 'SYSTEM' },
          { activity: 'Discovery Call Scheduled', createdBy: 'ADMIN' },
        ],
      },
    },
  });

  console.log(`✅ Seeded 2 sample consultation requests:`);
  console.log(` - Lead 1 ID: ${lead1.id} (${lead1.fullName})`);
  console.log(` - Lead 2 ID: ${lead2.id} (${lead2.fullName})`);
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
