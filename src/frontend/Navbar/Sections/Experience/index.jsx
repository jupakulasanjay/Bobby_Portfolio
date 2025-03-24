const Experience = () => {
  return (
    <div className="d-flex flex-column align-items-center parent-container">
      <div className="d-flex align-items-center justify-content-center ">
        <img
          src="/images/experience.png"
          alt=""
          style={{ width: "75px", height: "auto" }}
          className="experience-image"
        />
        <span className="ms-3 section-label">Experience</span>
      </div>

      <div className="d-flex gap-space mt-5 w-auto h-auto experience-box-container">
        <div className="experience-box">
          <span className="experience-heading">
            Multi-Cloud Engineer - (T Hub)
          </span>
          <div className="experience-body">
            <ul>
              <li>
                <i>6+ years of experience</i> in <i>multi-cloud solutions</i>{" "}
                (AWS, Azure, Google Cloud).
              </li>
              <li>
                Strong <i>networking knowledge (CCNA-level)</i> with expertise
                in <i>cloud architecture, automation, and security</i>.
              </li>
              <li>
                Hands-on experience with{" "}
                <i>
                  EC2, VPC, Auto Scaling, S3, RDS, IAM, and cloud-native
                  services
                </i>{" "}
                (Lambda, CloudWatch, DynamoDB, Elastic Beanstalk).
              </li>
              <li>
                Skilled in{" "}
                <i>
                  troubleshooting, optimizing performance, and ensuring cloud
                  security
                </i>
                .
              </li>
              <li>
                Expertise in{" "}
                <i>designing and managing scalable cloud infrastructures</i> for
                high availability.
              </li>
            </ul>
          </div>
        </div>
        <div className="experience-box">
          <span className="experience-heading">
            DevOps Engineer - (Technical Hub)
          </span>
          <div className="experience-body">
            <ul>
              <li>
                <i>6+ years of expertise</i> in{" "}
                <i>DevOps, automation, and CI/CD pipelines</i>.
              </li>
              <li>
                Proficient in{" "}
                <i>Terraform, Ansible, Jenkins, Git, Docker, and Kubernetes</i>.
              </li>
              <li>
                Strong background in{" "}
                <i>
                  Infrastructure as Code (IaC), containerization, and cloud
                  automation
                </i>
                .
              </li>
              <li>
                Experience in{" "}
                <i>
                  continuous integration and delivery (CI/CD) for efficient
                  deployments
                </i>
                .
              </li>
              <li>
                Skilled in{" "}
                <i>
                  troubleshooting, optimizing workflows, and implementing DevOps
                  best practices
                </i>
                .
              </li>
              <li>
                <i>Real-time project exposure</i> with the ability to{" "}
                <i>adapt to evolving technologies</i>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
