import { Project } from "../Typings/interfaces";

export const projects: {
  [key: string]: Project;
} = {
  Berryminator: {
    name: "Berryminator",
    description: `<p><strong>Berryminator</strong> is an advanced simulation of a four-wheeled, autonomous fruit-plucking Unmanned Ground Vehicle (UGV) developed on CoppeliaSim. Designed for efficient and intelligent fruit harvesting, it features a robotic arm capable of identifying and plucking fruits with precision.</p>

<p>The UGV can differentiate between three types of fruits based on their colors using a vision sensor. Once a fruit is identified, the robotic arm carefully plucks it using a specialized grip mechanism, ensuring minimal damage. After plucking, the system intelligently sorts and stores the fruits in dedicated containers onboard the UGV based on their type.</p>

<p>For navigation and localization, Berryminator utilizes QR codes strategically placed across the floor. By reading these codes, the UGV determines its position(coordinates) in real time and navigates autonomously using the A* algorithm. This allows it to plan efficient routes, avoid obstacles, and reach target locations with precision. The UGV is equipped with mecanum wheels, enabling omnidirectional movement. This unique locomotion system allows it to move seamlessly in any direction without needing to rotate, enhancing maneuverability in confined spaces.</p>

<p>Once the harvesting process is complete, Berryminator navigates itself to designated drop-off zones specific to each fruit type. It then carefully deposits the collected fruits in their respective areas, successfully completing the task.</p>

<p>With its intelligent automation, precise object handling, and advanced navigation capabilities, Berryminator demonstrates the potential of robotics in modern agricultural applications, paving the way for smarter and more efficient farming solutions.</p>`,
    skills:
      "Coppeliasim, ComputerVision, A* algorithm, Localization and navigation, publisher-subscriber architecture, python, GIT",
    category: "Robotics & Automation",
    image:
      "/contentImages/projects/berryminator.png",
  },
  "Aarogya 2.0": {
    name: "Aarogya 2.0",
    description: `<p><strong>Aarogya 2.0</strong> is an AI-powered Discord bot developed as part of the Tri-NIT Hackathon, conducted during the COVID-19 period. This innovative bot is designed to assist in preliminary medical diagnostics by analyzing chest X-ray images and classifying them into three categories: normal, pneumonia, or COVID-19.</p>

<p>At its core, Aarogya 2.0 utilizes <strong>Convolutional Neural Networks (CNNs)</strong> to extract meaningful features from X-ray images and make accurate predictions. The model is trained using an <strong>open-source dataset from Kaggle</strong>, ensuring a diverse and well-curated set of X-ray images for robust learning. The deep learning framework is built using <strong>TensorFlow</strong>, while <strong>Keras Tuner</strong> is employed for exhaustive hyperparameter optimization to enhance model accuracy.</p>

<p>The bot seamlessly integrates with Discord, providing an intuitive interface for users to upload chest X-ray images. It then processes the image through the trained CNN model and returns a classification result in real time. This makes Aarogya 2.0 a powerful tool for assisting healthcare professionals and individuals by offering preliminary insights, helping to reduce diagnostic workload, and enhancing remote healthcare solutions.</p>`,
    skills:
      "Machine Learning & Deep Learning, Tensorflow, python, Software Development Skills, flask",
    category:
      "Artificial Intelligence & Machine Learning",
    image:
      "/contentImages/projects/Aarogya.png",
  },
  "DIY Robot vacuum cleaner": {
    name: "DIY Robot vacuum cleaner",
    description: `<p><strong>DIY Robot Vacuum Cleaner</strong> is an exciting project that I am actively working on, and I will be sharing my progress through blogs—so stay tuned for updates!</p>

<p>This robot vacuum cleaner is built using <strong>ROS2 Humble</strong> on a <strong>Raspberry Pi 4B (8GB RAM)</strong> and consists of three main components working together: <strong>cleaning, mapping and localization, and navigation</strong>.</p>

<p>The development process follows an iterative approach. In the initial phase, the robot will operate using a simple cleaning mechanism combined with random movement. Over multiple iterations, I plan to enhance its functionality by refining its navigation, mapping capabilities, and overall efficiency.</p>

<p><strong>Motivation:</strong> Why buy something when you can build it yourself? This project aims to explore the possibilities of DIY robotics, making advanced automation accessible and customizable.</p>

<p>Follow along as I document my journey in building this robot vacuum cleaner—step by step!</p>`,
    skills: "ROS2, Embedded systems, Programming, Path Planning & Navigation, linux, GIT, Mechanical Design",
    category:
      "Algorithms, Computer Vision, Electronics, Path planning",
    image:
      "/contentImages/projects/RoboticVacuumCleaner.png",
  },
  "Line Follower Robot": {
    name: "Line Follower Robot",
    description: `<p><strong>Line Follower Robot</strong> is an automated vehicle designed to follow a visual path embedded on a surface. This path is typically a black line on a white surface or vice versa. The working principle of the robot is based on the behavior of light, where white surfaces reflect light while black surfaces absorb it.</p>

<p>The robot employs <strong>Infrared (IR) transmitters and receivers (photodiodes)</strong> to detect the path. When IR rays hit a white surface, they are reflected toward the IR receiver, generating a voltage change. Conversely, a black surface absorbs IR radiation, preventing any reflection, which results in no signal being received.</p>

<p>In this project, an <strong>Arduino Uno</strong> is used to process sensor data and control the movement of the robot. When the IR sensor detects a white surface, the Arduino registers a <strong>high (1)</strong> input, and when it detects a black line, it registers a <strong>low (0)</strong> input. Based on these inputs, the Arduino sends appropriate commands to control the robot’s movement.</p>

<p><strong>Components Used:</strong></p>
<ul>
    <li>Arduino Uno</li>
    <li>IR Sensors</li>
    <li>L293D Motor Driver</li>
    <li>BO Motors</li>
    <li>Wheels</li>
    <li>Lithium-ion Battery</li>
    <li>Jumper Cables</li>
</ul>

<p>Additionally, a <strong>robot chassis</strong> is required to mount all components. While a standard chassis can be used, a simple alternative can be built using cardboard.</p>

<p>This project is an excellent introduction to robotics and embedded systems, demonstrating real-world applications of sensor-based automation and motor control.</p>`,
    skills:
      "Embedded C, Circuit Design, Power Management, Sensors & Actuators",
    category:
      "Basic electronics, Arduino programming, Embedded systems",
    image:
      "/contentImages/projects/lineFollower.png",
  },
};
